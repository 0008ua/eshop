import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ScreenTypes, PictureTypes, IPictureSize, IPictureState, IFeedback } from '../interfaces';
import { environment } from '../../environments/environment';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { map } from 'rxjs/operators';
import { ScreenState } from '../reducers/screen.reducer';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  environment = environment;
  cloudinaryUrl = environment.cloudinary.cloudHost + '/' + environment.cloudinary.cloudName;

  constructor(
    private http: HttpClient,
    public media: MediaObserver,
  ) { }

  checkPictureFile(file: File): { err: string | null } {
    console.log('file.type', file.type);
    if (!file) {
      return ({ err: 'Файл не вибрано' });
    } else if (file.size > 26215000) { // 25 * 1024 * 1024
      return ({ err: 'Розмір файлу повинен бути менше 25Мб' });
    } else if (
      file.type !== 'image/jpg' &&
      file.type !== 'image/jpe' &&
      file.type !== 'image/gif' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/bmp' &&
      file.type !== 'image/png' &&
      file.type !== 'image/svg+xml' &&
      file.type !== 'image/webp') {
      return ({ err: 'Виберіть інший тип файлу' });
    } else {
      return ({ err: null });
    }
  }

  uploadPicture(file: File, filePrefix: string, eager: any): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('filePrefix', filePrefix);
    formData.append('eager', JSON.stringify(eager));

    return this.http.post<string>(
      'api/shared/upload-picture',
      formData
    );
  }

  createPictureOptions(productPictureSize: IPictureSize, screenType: ScreenTypes) {
    // tslint:disable-next-line: max-line-length
    return `c_fill,w_${productPictureSize[screenType].w},h_${productPictureSize[screenType].h},f_auto/w_${(productPictureSize[screenType].w) * 0.5},g_south_east,x_5,y_5,l_hmade_logo_light_watermark`;
  }

  createPictureLink(pictureType: PictureTypes, screenType: ScreenTypes) {
    switch (pictureType) {
      case PictureTypes.ProductPicture: {
        return this.cloudinaryUrl + '/' +
          this.createPictureOptions(
            this.environment.cloudinary.pictureSize[PictureTypes.ProductPicture],
            screenType
          );
      }
      case PictureTypes.DashboardProductPicture: {
        return this.cloudinaryUrl + '/' +
          this.createPictureOptions(
            this.environment.cloudinary.pictureSize[PictureTypes.DashboardProductPicture],
            screenType
          );
      }
      case PictureTypes.ModalProductPicture: {
        return this.cloudinaryUrl + '/' +
          this.createPictureOptions(
            this.environment.cloudinary.pictureSize[PictureTypes.ModalProductPicture],
            screenType
          );
      }
      default: {
        return this.cloudinaryUrl;
      }
    }
  }

  loadScreens() {
    return this.media.asObservable()
      .pipe(
        map((_: MediaChange[]) => {
          const screenState = {} as ScreenState;
          screenState.pictureLink = {};
          // link to cloudinary pictures depend on screen size
          for (const pictureType in PictureTypes) {
            if (PictureTypes.hasOwnProperty(pictureType)) { //  && !isNaN(Number(pictureType))) {
              screenState.pictureLink[pictureType] = {} as IPictureState;
              if (this.media.isActive(ScreenTypes.xs)) {
                const { w, h } = this.environment.cloudinary.pictureSize[pictureType][ScreenTypes.xs];
                screenState.pictureLink[pictureType].size = { w, h };
                screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType as PictureTypes, ScreenTypes.xs);
              } else if (this.media.isActive(ScreenTypes.sm)) {
                const { w, h } = this.environment.cloudinary.pictureSize[pictureType][ScreenTypes.sm];
                screenState.pictureLink[pictureType].size = { w, h };
                screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType as PictureTypes, ScreenTypes.sm);
              } else if (this.media.isActive(ScreenTypes.md)) {
                const { w, h } = this.environment.cloudinary.pictureSize[pictureType][ScreenTypes.md];
                screenState.pictureLink[pictureType].size = { w, h };
                screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType as PictureTypes, ScreenTypes.md);
              } else if (this.media.isActive(ScreenTypes.lg)) {
                const { w, h } = this.environment.cloudinary.pictureSize[pictureType][ScreenTypes.lg];
                screenState.pictureLink[pictureType].size = { w, h };
                screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType as PictureTypes, ScreenTypes.lg);
              } else {
                const { w, h } = this.environment.cloudinary.pictureSize[pictureType][ScreenTypes.xl];
                screenState.pictureLink[pictureType].size = { w, h };
                screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType as PictureTypes, ScreenTypes.xl);
              }
            }
          }

          // portion of pictures to load depend on screen size
          if (this.media.isActive(ScreenTypes.xs)) {
            screenState.picturesOnPage = this.environment.defaults.picturesOnPage[ScreenTypes.xs];
            screenState.screenSize = ScreenTypes.xs;
          } else if (this.media.isActive(ScreenTypes.sm)) {
            screenState.picturesOnPage = this.environment.defaults.picturesOnPage[ScreenTypes.sm];
            screenState.screenSize = ScreenTypes.sm;
          } else if (this.media.isActive(ScreenTypes.md)) {
            screenState.picturesOnPage = this.environment.defaults.picturesOnPage[ScreenTypes.md];
            screenState.screenSize = ScreenTypes.md;
          } else if (this.media.isActive(ScreenTypes.lg)) {
            screenState.picturesOnPage = this.environment.defaults.picturesOnPage[ScreenTypes.lg];
            screenState.screenSize = ScreenTypes.lg;
          } else {
            screenState.picturesOnPage = this.environment.defaults.picturesOnPage[ScreenTypes.xl];
            screenState.screenSize = ScreenTypes.xl;
          }
          return screenState;
        })
      );
  }


  sendFeedbackMessage(feedback: IFeedback, recaptcha: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({
        fromObject: {
          recaptcha
        }
      })
    };
    return this.http.post<string>(
      'api/shared/send-feedback-message',
      feedback,
      httpOptions
    );
  }
}

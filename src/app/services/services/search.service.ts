import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  /**
   * TODO: Метод должен получить введную пользователем строку, и связаться с методом отправляющем запрос к API
   * Dependency Injection читать
   * Singletone
   * @param searchString
   */
  public startSearch(searchString: string): void {
    console.log(searchString, 'search service ...');
  }
}

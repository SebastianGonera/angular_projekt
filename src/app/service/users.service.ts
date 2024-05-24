import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://expressapi-eetf.onrender.com/api/';
  
  private userSubject = new BehaviorSubject<any>(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

getUserFromStorage(){
  return{
    token: localStorage.getItem('token'),
    userId:  localStorage.getItem('user_id'),
    username: localStorage.getItem('username'),
    email:  localStorage.getItem("user_email"),
    isAdmin: localStorage.getItem("user_isAdmin")
  }
}

clearUserStroage(){
  localStorage.clear();
  this.userSubject.next(null);
}


  registerUser(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>(`${this.apiUrl}users/signup`, user, httpOptions);
  }

  loginUser(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>(`${this.apiUrl}users/signin`, user, httpOptions);
  }

  addFavoriteBook(bookId: any): Observable<any> {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',

      })
    };
    const userId = localStorage.getItem("user_id");
    const id = {
      "userId": userId
    }
    return this.http
      .put<any>(`${this.apiUrl}users/add_favorite_book/${bookId}`, id, httpOptions);
  }

  removeFavoriteBook(bookId: any): Observable<any> {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const userId = localStorage.getItem("user_id");
    const id = {
      "userId": userId
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      }
      ),
      body: id
    };

    return this.http
      .delete<any>(`${this.apiUrl}users/remove_favorite_book/${bookId}`, httpOptions);
  }

  getFavoriteBooks(): Observable<any> {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',

      })
    };
    const userId = localStorage.getItem("user_id");
    return this.http.get<any>(`${this.apiUrl}users/favorite_books/${userId}`, httpOptions);
  }

  getFavoriteAuthors(): Observable<any> {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',

      })
    };
    const userId = localStorage.getItem("user_id");
    return this.http.get<any>(`${this.apiUrl}users/favorite_authors/${userId}`, httpOptions);
  }

  addFavoriteAuthor(authorId: any): Observable<any> {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',

      })
    };
    const userId = localStorage.getItem("user_id");
    const id = {
      "userId": userId
    }
    return this.http
      .put<any>(`${this.apiUrl}users/add_favorite_author/${authorId}`, id, httpOptions);
  }

  removeFavoriteAuthor(authorId: any): Observable<any> {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const userId = localStorage.getItem("user_id");
    const id = {
      "userId": userId
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      }
      ),
      body: id
    };

    return this.http
      .delete<any>(`${this.apiUrl}users/remove_favorite_author/${authorId}`, httpOptions);
  }

  updateUser(editedUser: any): Observable<any> {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const userId = localStorage.getItem("user_id");

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      }
      )
    };
    return this.http.put<any>(`${this.apiUrl}users/update/${userId}`, editedUser, httpOptions);
  }

  changePassword(newPass :any): Observable<any>{
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const userId = localStorage.getItem("user_id");

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      }
      )
    };
    return this.http.put<any>(`${this.apiUrl}users/change_password/${userId}`, newPass, httpOptions);
  }

  deleteUser(): Observable<any>{
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const userId = localStorage.getItem("user_id");

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
      }
      )
    };
    return this.http.delete<any>(`${this.apiUrl}users/delete/${userId}`, httpOptions);
  }
}

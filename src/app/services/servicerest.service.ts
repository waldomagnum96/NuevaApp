import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import { Student } from '../clases/student';
import { Post } from '../clases/post';

@Injectable({
  providedIn: 'root'
})
export class ServicerestService {

  URL: string = 'https://jsonplaceholder.typicode.com';
  httpHeader = {headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin' :'*'}),};
    
  constructor(private http: HttpClient) { }


  getStudent(id: any): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.URL}/users/` + id).pipe(
      tap((_) => console.log(`Student fetched: ${id}`)),
      catchError(this.handleError<Student[]>(`Get student id=${id}`))
    );
  }
    
  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.URL}/users/`).pipe(
      tap((Student) => console.log('Student fetched!')),
      catchError(this.handleError<Student[]>('Get student', []))
    );
  }
    

  addStudent(student: Student): Observable<any> {
    return this.http
      .post<Student>(`${URL}/users/`, student, this.httpHeader)
      .pipe(catchError(this.handleError<Student>('Add Student')));
  }
    

  updateStudent(id: any, student: Student): Observable<any> {
    return this.http.put(`${URL}/users/` + id, student, 
    this.httpHeader).pipe(
      tap((_) => console.log(`Student updated: ${id}`)),
      catchError(this.handleError<Student[]>('Update student'))
    );
  }
    

  deleteStudent(id: any): Observable<Student[]> {
    return this.http.delete<Student[]>(`${URL}/users/` + id, this.httpHeader).pipe(
      tap((_) => console.log(`Student deleted: ${id}`)),
      catchError(this.handleError<Student[]>('Delete student'))
    );
  }

  getPostsList():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.URL}/posts/`).pipe(
      tap((Post) => console.log('Post fetched!')),
      catchError(this.handleError<Post[]>('Get posts', []))
    ); 
  }

  getPost(id: any): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/posts/` + id).pipe(
      tap((_) => console.log(`Post fetched: ${id}`)),
      catchError(this.handleError<Post[]>(`Get post id=${id}`))
    );
  }

  addPost(post: Post): Observable<any> {
    return this.http
      .post<Post>(`${URL}/posts/`, post, this.httpHeader)
      .pipe(catchError(this.handleError<Post>('Add Post')));
  }

  updatePost(id: any, post: Post): Observable<any> {
    return this.http.put(`${URL}/posts/` + id, post, this.httpHeader).pipe(
      tap((_) => console.log(`Post updated: ${id}`)),
      catchError(this.handleError<Post[]>('Update post'))
    );
  }

  deletePost(id: any): Observable<Post[]> {
    return this.http.delete<Post[]>(`${URL}/posts/` + id, this.httpHeader).pipe(
      tap((_) => console.log(`Post deleted: ${id}`)),
      catchError(this.handleError<Post[]>('Delete post'))
    );
  }
    

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

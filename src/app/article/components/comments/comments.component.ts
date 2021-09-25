import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CommentsService } from '../../services/comments.service';
import { CommentInterface } from '../../types/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input("slug") slugProps: string;

  comments$: Observable<CommentInterface[]>
  commentPostSubscription: Subscription

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      body: ["", Validators.required]
    });

    this.fetchComments();
  }

  fetchComments(): void {
    this.comments$ = this.commentsService.getCommentsByArticles(this.slugProps);
  }

  onSubmit(): void {
    const value = {comment: this.form.value}
    this.commentsService.postComment(this.slugProps, value).subscribe(res => {      
      this.fetchComments();
    }).unsubscribe();
    
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleInputInterface } from '../../../types/articleInput.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  @Input("initialValues") initialValuesProps: ArticleInputInterface;
  @Input("isSubmitting") isSubmittingProps: boolean;
  @Output("articleSubmit") articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

  form: FormGroup;

  markdown: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.markdown = this.initialValuesProps.body;
  }
  
  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(" ")
    })
  }

  onSubmit(): void {
    const value = {
      ...this.form.value,
      tagList: this.form.value.tagList.split(" ")
    }
    this.articleSubmitEvent.emit(value)
  }

}

import {Component, Input, OnInit, Output, SimpleChange, SimpleChanges, EventEmitter} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FoodItem} from '../../../../../common/api/model/foodItem/food-item';
import {FoodItemService} from '../../../../../common/api/access-service/foodItem/food-item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  private id: number;
  @Output()
  public idChange = new EventEmitter<number>();
  public item: FoodItem;

  constructor(
    private foodItemService: FoodItemService
  ) {
  }

  ngOnInit(): void {
    this.reload();
  }

  delete(): void{
    this.foodItemService.delete(this.id).subscribe(
      () => this.idChange.emit(this.id)
    );
  }

  reload(): void{
    this.foodItemService.getItem(this.id).subscribe(
      data => this.item = {...data}
    );
  }
}

import { Favor } from './favor.model';

export class FavorService {

  items: Favor[] = [];
  index: number;
  isExist: boolean;

  clear() {
    this.items = [];
  }

  attachItem(item: Favor) {
    if (!this.exist(item)) {
      this.items.push(item);
    } else {
      this.items.splice(this.index, 1);
    }
  }

  exist(item: Favor): boolean {
    this.isExist = false;

    for (this.index = 0; this.index < this.items.length; this.index++) {
      if (this.items[this.index].url === item.url) {
        this.isExist = true;
        break;
      }
    }

    return this.isExist;
  }

}

export class Model{
  user;
  items;

  constructor(){
    this.user = "Malik's";
    this.items = [
      new TodoItems("Kahvalti", true),
      new TodoItems("Fatura Ödeme", false),
      new TodoItems("Spor", false),
      new TodoItems("Sinema", false),

    ];
  }
}

export class TodoItems {

  description;
  action;

  constructor(description: string,action: boolean){
    this.description = description;
    this.action = action;
  }
}


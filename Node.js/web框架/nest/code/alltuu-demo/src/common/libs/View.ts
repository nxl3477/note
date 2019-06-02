export class View {
  // 视图的名称
  public name: string;
  
  // 要渲染的数据源
  public data: any;
  
  constructor(name: string, data: any = {}) {
    this.name = name
    this.data = data
  }
}
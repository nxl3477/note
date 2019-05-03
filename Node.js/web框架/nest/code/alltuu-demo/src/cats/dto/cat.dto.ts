export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class FindCats {
  readonly name: string;
}
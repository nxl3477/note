<form action="/books/basic/web/index.php?r=library%2Fupdate&id=<?=$id?>" method="post" >
  <input type="hidden" name="id" class="form-control" id="exampleFormControlInput1" placeholder="书名" value="<?=$id ?>" >
  <div class="form-group">
    <label for="exampleFormControlInput1">书名</label>
    <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="书名" value="<?=$name ?>" >
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">作者</label>
    <input type="text" name="auther" class="form-control" id="exampleFormControlInput1" placeholder="作者" value="<?=$auther ?>">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">价格</label>
    <input type="number" name="price" class="form-control" id="exampleFormControlInput1" placeholder="价格" value="<?=$price ?>">
  </div>
  <input name="_csrf" type="hidden" id="_csrf" value="<?= Yii::$app->request->csrfToken ?>">
  <div class="form-group">
    <button type="submit" class="btn btn-primary">保存</button>
  </div>
</form>
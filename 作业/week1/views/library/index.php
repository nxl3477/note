<div class="row">
  <form class="form-inline" action="/books/basic/web/index.php?r=library" method="post">
    <div class="form-group mb-2">
      <label for="inputPassword2" class="sr-only">书名</label>
      <input type="text" name="query" class="form-control" id="inputPassword2" >
    </div>
    <input name="_csrf" type="hidden" id="_csrf" value="<?= Yii::$app->request->csrfToken ?>">
    <button type="submit" class="btn btn-primary mb-2">查询</button>
    <a href="/books/basic/web/index.php?r=library%2Fcreate"  class="btn btn-success mb-2">新增</a>
  </form>
  <table class="table border">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">书名</th>
        <th scope="col">作者</th>
        <th scope="col">价格</th>
        <th scope="col">操作</th>
        </tr>
    </thead>
    <tbody>
      <?php foreach($arrs as $arr): ?>
      <tr>
        <th scope="row"><?php  echo $arr['id'] ?></th>
        <td><?php  echo $arr['name'] ?></td>
        <td><?php  echo $arr['auther'] ?></td>
        <td><?php  echo $arr['price'] ?></td>
        <td>
          <a class="btn btn-success" href="/books/basic/web/index.php?r=library%2Fview&id=<?=$arr['id'] ?>">查看</a>
          <a class="btn btn-success" href="/books/basic/web/index.php?r=library%2Fupdate&id=<?=$arr['id'] ?>">编辑</a>
          <a class="btn btn-danger"  href="/books/basic/web/index.php?r=library%2Fdelete&id=<?=$arr['id'] ?>">删除</button>
        </td>
      </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
   
</div>


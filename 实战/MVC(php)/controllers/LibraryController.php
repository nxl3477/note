<?php

namespace app\controllers;

use Yii;
use app\models\Library;
use app\models\LibrarySearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\helpers\Json;
class LibraryController extends Controller
{   
    // public function beforeAction($action)
    // {
    //     $this->enableCsrfValidation = false;
    //     return parent::beforeActin($action);
    // }  

    public $enableCsrfValidation = false;
    public function actionIndex() {
        $request = Yii::$app->request;

        if($request -> isPost ) {
            $query = $request -> post()['query'];
            $query = '%'.$query.'%';
            $sql = "select * from library where name like :name or auther like :auther ";
            $result = Library::findBySql($sql, array('name' =>$query, 'auther'=>$query)) ->all();
            echo Json::encode([
                'errorCode' => 0,
                'msg' => '查询成功',
                'data' => $result
            ]);
        }else {
            $result = Library::find() -> all();
            echo Json::encode([
                'errorCode' => 0,
                'msg' => '查询成功',
                'data' => $result
            ]);
            // print_r($result);
        }
        
    }

    public function actionView($id) {
        $request = Yii::$app->request;
        $sql = "select * from library where id=:id";
        $result = Library::findBySql($sql, array('id' =>$id)) -> asArray() ->all();
        echo Json::encode([
            'errorCode' => 0,
            'msg' => '查询成功',
            'data' => $result[0]
        ]);
    }

    public function actionCreate() {
        // 获取参数
        // $request = Yii::$app->request->get();
        $model = new Library();
        
        $model -> name = Yii::$app -> request -> post()['name'];
        $model -> auther = Yii::$app -> request -> post()['auther'];
        $model -> price = Yii::$app -> request -> post()['price'];
        // 这种方式需要表单name =library[name] 的方式
        if ($model->save()) {
            echo Json::encode([
                'errorCode' => 0,
                'msg' => '添加成功',
                'data' => []
                ]);
        }else {
            echo Json::encode([
                'errorCode' => 501,
                'msg' => '添加失败',
                'data' => []
                ]);
        }
    }


    public function actionUpdate($id) {
        // 获取参数
        $request = Yii::$app->request;
       
        
        if ($request -> isPost) {
            $name = $request -> post()['name'];
            $auther = $request -> post()['auther'];
            $price = $request -> post()['price'];
            $result = Library::updateAll(['name' => $name, 'auther'=> $auther, 'price' => $price], ['id'=> $id]);
            echo Json::encode([
                'errorCode' => 0,
                'msg' => '编辑成功',
                'data' => $result[0]
                ]);
        }else {
            $request = Yii::$app->request;
            $sql = "select * from library where id=:id";
            $result = Library::findBySql($sql, array('id' =>$id)) -> asArray() ->all();
            echo Json::encode([
                'errorCode' => 0,
                'msg' => '查询成功',
                'data' => $result[0]
                ]);
        }
    }


    public function actionDelete($id) {
        $result = Library::find() -> where(['id' => $id]) -> all();
        $result[0] -> delete();
        echo Json::encode([
            'errorCode' => 0,
            'msg' => '删除成功',
            'data' => []
            ]);
    }

}
?>
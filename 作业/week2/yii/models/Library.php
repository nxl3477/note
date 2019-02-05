<?php

namespace app\models;

use yii\db\ActiveRecord;

class Library extends ActiveRecord
{

    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['name', 'auther', 'price'], 'safe'],
        ];
    }

}
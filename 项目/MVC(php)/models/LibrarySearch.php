<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Library;

/**
 * LibrarySearch represents the model behind the search form of `app\models\Library`.
 */
class LibrarySearch extends Library
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'price'], 'integer'],
            [['name', 'auther'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Library::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        // 注入参数
        $this->load($params);

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'price' => $this->price,
        ]);

        // 在name 和 authe
        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'auther', $this->auther]);

        return $dataProvider;
    }
}

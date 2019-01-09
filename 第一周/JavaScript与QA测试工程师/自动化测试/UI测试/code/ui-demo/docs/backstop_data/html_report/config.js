report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\..\\..\\backstop_data\\bitmaps_reference\\nxl_home_0_document_0_phone.png",
        "test": "..\\..\\..\\backstop_data\\bitmaps_test\\20190109-105445\\nxl_home_0_document_0_phone.png",
        "selector": "document",
        "fileName": "nxl_home_0_document_0_phone.png",
        "label": "home",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.88",
          "analysisTime": 20
        },
        "diffImage": "..\\..\\..\\backstop_data\\bitmaps_test\\20190109-105445\\failed_diff_nxl_home_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\..\\..\\backstop_data\\bitmaps_reference\\nxl_home_0_document_1_tablet.png",
        "test": "..\\..\\..\\backstop_data\\bitmaps_test\\20190109-105445\\nxl_home_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "nxl_home_0_document_1_tablet.png",
        "label": "home",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "nxl"
});
/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: ' wx4d7b00c15026686d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '433e399cc3771fbd3a9ece5f66f5a7ab',

  PROVINCE: '云南',
  CITY: '楚雄',

  USERS: [
    {
      // 想要发送的人的名字
      name: '亲爱的晓娟',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'omfNg5_d8P7_19CAo03mlB0CbyPE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: ' zlOLyoU2GPRFAvtLI2lU8QjBPRDF4nrVTv8N5-ZAaBE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '晓娟', year: '1996', date: '10-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-18',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '05-07',
        },
      ],
      
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG


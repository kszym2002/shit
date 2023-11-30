auto.waitFor();
events.observeNotification();
events.on("notification", function(n){
    log(n.getTitle()); //监听标题
    if (n.getTitle() == "竞彩超额申请书，请初审！"){ //当出现初审时
        if (!device.isScreenOn()) {        //从息屏状态  将屏幕唤醒
            device.wakeUp()//唤醒设备
            sleep(3000) // 等待屏幕亮起
            //下拉状态栏
            swipe(500, 30, 500, 1000, 300);
            sleep(400);
            //点击时间
            click(100, 120);
        
            swipe(random(device.width / 3, device.width / 2), random(device.height * 8 / 10, device.height * 7 / 10), random(device.width / 3, device.width / 2), random(device.height * 2 / 10, device.height / 10), random(500, 1000))
            sleep(2000)
        
            //解锁
            desc(1).findOne().click()
            desc(1).findOne().click()
            desc(1).findOne().click()
            desc(1).findOne().click()
            desc(1).findOne().click()
            desc(1).findOne().click()
        }
sleep(3000);
launchPackage('com.tc.mobile');
sleep(5000);
click(670, 1402);
sleep(1000);
click(722, 580);
sleep(3000);
var 控件 = id("excess_shop_no");
var 站点号 = 控件.find().get(0).text();
log(站点号);
var 判断 = /320500540[48]|320500541[79]|320500543[258]|320500544[59]|320500545[012]|3205005464|320500547[37]|320500548[34579]|3205005561|320500557[689]|32050154[34]|320502540[78]|320502541[45]|320502542[45]|320502543[27]|3205025445|320502557[78]|3205025587|32050554[012]|3205055411|320505542[057]|320505543[35]|320505544[045]|320505546[2479]|320505547[03489]/.test(站点号);
log(判断);
if ( 判断 == true ){
var widget = id("bottom_detail_edit").findOne(2000);
widget.setText("ok");
sleep(1000);
id("bottom_detail_sure").findOne().click();
sleep(1000);
click(350, 1300);
sleep(1000);
click(480, 1400);
sleep(3000);
launchPackage('com.tencent.mobileqq');
sleep(5000);
click(670, 580);
var input = id("input").findOne(2000);
input.setText(站点号+'超额');
sleep(3000);
id("fun_btn").findOne().click();
sleep(3000);
app.openAppSetting('com.tencent.mobileqq')
sleep(1000);
while(true){
    if(text("结束运行").exists()){
        click(350, 2225);
        sleep(500);
        while(true){
            if(text("确定").exists()){
                click("确定");
                sleep(500);
                break;
            }
        }
        break;
    }
}
}
app.openAppSetting('com.tc.mobile')
sleep(1000);
while(true){
    if(text("结束运行").exists()){
        click(350, 2225);
        sleep(500);
        while(true){
            if(text("确定").exists()){
                click("确定");
                sleep(500);
                break;
            }
        }
        break;
    }
}
sleep(1000);
lockScreen();
}
});

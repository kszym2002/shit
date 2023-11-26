auto.waitFor();
events.observeNotification();
events.on("notification", function(n){
    log(n.getPackageName());
});
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
sleep(3000);
click(670, 1402);
sleep(3000);
click(722, 580);
sleep(200);
var widget = id("bottom_detail_edit").findOne(2000);
if (widget) {
    // 如果控件存在，就输入ok
    widget.setText("ok");
    sleep(200);
    id("bottom_detail_sure").findOne().click();
    sleep(200);
    click(350, 1300);
    sleep(200);
    click(480, 1400);
    sleep(200);
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
    lockScreen();
} else {
    // 如果控件不存在，就输出日志
    console.log("未找到傻逼输入框");
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
    lockScreen(); 
}

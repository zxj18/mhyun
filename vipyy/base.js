js:
const _config = {
  home_name: "VIP影院",
  remote_update: 'https://gitee.com/f11st/hiker/raw/master/vipyy/update.json',
  local_js: 'hiker://files/quietboy/vipyy/main.js',
  local_config_path: 'hiker://files/quietboy/vipyy/config.json',
};

function queryUpdate() {
  if (getUrl().indexOf('ppuqq') >= 0) {
    return true;
  }
  else {
    return false;
  }
}
function querySetting() {
  if (getUrl().indexOf('ppsqq') >= 0) {
    return true;
  }
  else {
    return false;
  }
}
function getLocalConfig() {
  let localConfig = fetch(_config.local_config_path, {});
  let localConfigObj = {};
  try {
    if (localConfig == '') {
      throw 'none';
    }
    else {
      localConfigObj = JSON.parse(localConfig);
      if (localConfigObj.rule_version == undefined || localConfigObj.js_version == undefined || localConfigObj.setting == undefined) {
        throw 'undefined';
      }
    }
  } catch (e) {
    localConfigObj = {};
    localConfigObj.rule_version = 0;
    localConfigObj.js_version = 0;
    localConfigObj.setting = [];
    writeFile(_config.local_config_path, JSON.stringify(localConfigObj));
  }
  return localConfigObj;
}
function queryUpdateTimeOut() {
  let config = getLocalConfig();
  let now = new Date().getTime();
  if ((now - config.last_check_update_time) > 259200000) {
    return true;
  }
  return false;
}
function getLocalRuleVersion() {
  let version = getLocalConfig().rule_version;
  return version;
}
function getLocalJsVersion() {
  let version = getLocalConfig().js_version;
  return version;
}
function getLocalSetting() {
  let setting = getLocalConfig().setting;
  return setting;
}
function getLocalJS() {
  let jsCode = fetch(_config.local_js, {});
  return jsCode;
}
function getRemoteCommandRoute(remote_command) {
  return fetch(remote_command, {});
}
function displayUpdate() {
  let res = {};
  let remoteJson = JSON.parse(fetch(_config.remote_update, {}));
  let remoteRuleVersion = remoteJson.rule_version;
  let remoteJsVersion = remoteJson.js_version;
  let remoteCMD = remoteJson.command;
  let remoteJS = remoteJson.remote;
  let remoteSetting = JSON.stringify(remoteJson.setting);
  let localConfig = getLocalConfig();
  localConfig.last_check_update_time = new Date().getTime();
  writeFile(_config.local_config_path, JSON.stringify(localConfig));
  d = [{
    title: '规则版本: ' + getLocalRuleVersion() + '    最新: ' + remoteRuleVersion,
    desc: '点击更新规则，若无效请联系作者修复',
    url: `hiker://empty@lazyRule=.js:` +
      `let localConfig = JSON.parse(fetch('` + _config.local_config_path + `',{}));localConfig.rule_version='` + remoteRuleVersion + `';writeFile('` + _config.local_config_path + `',JSON.stringify(localConfig));` +
      `'` + getRemoteCommandRoute(remoteCMD) + `'`,
    col_type: 'text_1'
  }, {
    col_type: 'line_blank'
  }, {
    title: '脚本版本: ' + getLocalJsVersion() + '    最新: ' + remoteJsVersion,
    desc: '点击更新脚本，若无效请联系作者修复',
    url: `hiker://empty@lazyRule=.js:` +
      `writeFile('` + _config.local_js + `', fetch('` + remoteJS + `', {}));` +
      `let localConfig = JSON.parse(fetch('` + _config.local_config_path + `',{}));` +
      `localConfig.js_version='` + remoteJsVersion + `';` +
      `localConfig.setting=JSON.parse(\`` + remoteSetting + `\`);` +
      `writeFile('` + _config.local_config_path + `',JSON.stringify(localConfig));` +
      `refreshPage();'toast://更新成功！'`,
    col_type: 'text_1'
  }, {
    col_type: 'line_blank'
  }, {
    title: '<p style="text-align: center;"><strong><font color="red">·更新日志·</font></strong><ul><li>' + remoteJson.note.join('</li><li>') + '</li></ul></p>',
    col_type: 'rich_text'
  }];
  res.data = d;
  setResult(res);
}
function displaySetting() {
  function findOptTitle(opts, value) {
    let title = '';
    opts.some((item) => {
      if (item.value == value) {
        title = item.title;
        return true;
      }
      else {
        return false;
      }
    });
    return title;
  }
  let res = {};
  let d = [];
  let setting = getLocalSetting();
  for (let i = 0; i < setting.length; i++) {
    d.push({
      title: setting[i].title + ': ‘‘' + findOptTitle(setting[i].opts, setting[i].value) + '’’',
      col_type: 'text_1'
    });
    for (let j = 0; j < setting[i].opts.length; j++) {
      d.push({
        title: setting[i].opts[j].title,
        col_type: 'text_3',
        url: `hiker://empty@lazyRule=.js:` +
          `let localConfig = JSON.parse(fetch('` + _config.local_config_path + `',{}));` +
          `localConfig.setting[` + i + `].value=` + setting[i].opts[j].value + `;` +
          `writeFile('` + _config.local_config_path + `',JSON.stringify(localConfig));` +
          `refreshPage();'toast://修改成功！'`
      });
    }
  }
  res.data = d;
  setResult(res);
}
try {
  if (queryUpdate() || queryUpdateTimeOut()) {
    displayUpdate();
  }
  else if (querySetting()) {
    displaySetting();
  }
  else {
    var localJS = getLocalJS();
    if (localJS == '') {
      throw 'none';
    }
    else {
      eval(localJS);
      jiexi();
    }
  }
} catch (e) {
  displayUpdate();
}
## slack bot
slack使ってますか

## 現状
- 面白そうな雰囲気を感じるけど、使い倒してはいない

## chatops
- チャットでオペレーションする
- オペレーションを簡単にすることで誰でもできるようにする

## bot
- chatopsの前提になるやつ
- slackはbot作りやすい

## slack + bot
- [Bot Users | Slack](https://api.slack.com/bot-users)
- bot frameworkがある
    - hubot + slack adapter
    - botkit
- どれもproxyの裏で使うのは難しい

## slack api
- web apiが公開されているので直接叩けばよい
- Real Time Messaging API (RTM)
    - websocket
    - 送信はフォーマットが決まっている
- 複雑なメッセージを送りたければ、chat.postMessageを使う
    - [chat.postMessage method | Slack](https://api.slack.com/methods/chat.postMessage)

## set up
- botをslack上に登録
    - [Bots | xxx Slack](https://my.slack.com/services/new/bot)
    - 登録するとトークンが自動で発行される
## over proxy
- ライブラリはプロクシの情報を受取るIFがある
- 内部では使ってない…



__END__
require "slack"$
$
token = "xoxb-46764990519-ALNRBuvw2iO83kE0dg6OOv0B"$
Slack.configure do |config|$
  config.token = token$
    #config.proxy = ?$
end$
$
client = Slack.realtime$
client.on :hello do$
  puts "hell yes. connected."$
end$
$
client.on :message do |data|$
  if /hugo/ =~ data['text']$
    params = {$
      token: token,$
      channel: data['channel'],$
      username: "hugo",$
      as_user: true,$
      text: "yo #{data['user']}, hell yes."$
    }$
    Slack.chat_postMessage params$
  end$
$
end$

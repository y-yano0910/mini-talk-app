class MessagesController < ApplicationController

  def new
    @messages = Message.all
    @message = Message.new
  end

  def create
    @message = Message.new(text: params[:message][:text])
    if @message.save
      ActionCable.server.broadcast 'message_channel', content: @message
      #メッセージの保存が成功した場合、、broadcast(データの経路)を通して'message_channel'に向けて@messageを送信する処理
    end
  end
end

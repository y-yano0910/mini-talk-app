class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "message_channel" #サーバーとクライアントを関連付けるための設定
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

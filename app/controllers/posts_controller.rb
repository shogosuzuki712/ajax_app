class PostsController < ApplicationController

  def index  # indexアクションを定義した
    @posts = Post.order(id: "DESC")
  end
  # 使わないのでコメントアウトしておく
  # def new
  # end

  def create
    Post.create(content: params[:content])
    redirect_to action: :index
  end

end

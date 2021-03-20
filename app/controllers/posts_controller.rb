class PostsController < ApplicationController

  def index  # indexアクションを定義した
    @posts = Post.order(id: "DESC")
  end
  # 使わないのでコメントアウトしておく
  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    render json:{ post: post }
  end

end

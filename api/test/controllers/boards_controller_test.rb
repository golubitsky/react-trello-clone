require 'test_helper'

class BoardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @board = boards(:one)
  end

  test "should get index" do
    get boards_url, as: :json
    assert_response :success
  end

  test "should create board" do
    assert_difference('Board.count') do
      post boards_url, params: { board: { title: @board.title } }, as: :json
    end

    assert_response 201
  end

  test "should show board" do
    get board_url(@board), as: :json
    assert_response :success
  end

  test "should update board" do
    patch board_url(@board), params: { board: { title: @board.title } }, as: :json
    assert_response 200
  end

  test "should destroy board" do
    assert_difference('Board.count', -1) do
      delete board_url(@board), as: :json
    end

    assert_response 204
  end
end

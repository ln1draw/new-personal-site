require 'test_helper'

class CounterControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get counter_index_url
    assert_response :success
  end

  test "should get add_one" do
    get counter_add_one_url
    assert_response :success
  end

  test "should get show" do
    get counter_show_url
    assert_response :success
  end

end

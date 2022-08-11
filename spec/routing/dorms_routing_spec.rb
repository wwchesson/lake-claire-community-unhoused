require "rails_helper"

RSpec.describe DormsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/dorms").to route_to("dorms#index")
    end

    it "routes to #show" do
      expect(get: "/dorms/1").to route_to("dorms#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/dorms").to route_to("dorms#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/dorms/1").to route_to("dorms#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/dorms/1").to route_to("dorms#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/dorms/1").to route_to("dorms#destroy", id: "1")
    end
  end
end

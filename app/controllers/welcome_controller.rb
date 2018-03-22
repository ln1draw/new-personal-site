class WelcomeController < ApplicationController
    def index
        @title = "Ellen Wondra"
    end

    def resume
        @title = "Resume | Ellen Wondra"
    end

    def links
        @title = "Links | Ellen Wondra"
    end

    def blog
        @title = "Blog | Ellen Wondra"
    end
end

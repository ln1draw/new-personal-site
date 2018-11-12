class WelcomeController < ApplicationController
    def blog
        @title = "Blog | Ellen Wondra"
    end

    def index
        @title = "Ellen Wondra"
    end

    def resume
        @title = "Resume | Ellen Wondra"
    end

    def links
        @title = "Links | Ellen Wondra"
    end

    def qrstitch
        @title = "QR from Cross - Stitch | Ellen Wondra"
    end
end

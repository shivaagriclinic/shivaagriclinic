import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Play, Youtube, Clock, Eye } from "lucide-react";

const featuredVideo = {
  id: "featured",
  title: "Complete Guide to Organic Farming - Start to Finish",
  description: "Learn everything about organic farming from soil preparation to harvesting. A comprehensive guide for beginners and experienced farmers alike.",
  views: "125K",
  duration: "45:30",
  thumbnail: "🎬",
};

const videos = [
  { id: 1, title: "Pest Control Without Chemicals", category: "Pest Management", views: "89K", duration: "18:45", thumbnail: "🐛" },
  { id: 2, title: "Soil Testing at Home", category: "Soil Health", views: "56K", duration: "12:30", thumbnail: "🧪" },
  { id: 3, title: "Maximizing Rice Yield", category: "Crop Advisory", views: "112K", duration: "22:15", thumbnail: "🌾" },
  { id: 4, title: "Drip Irrigation Setup", category: "Irrigation", views: "78K", duration: "15:20", thumbnail: "💧" },
  { id: 5, title: "Composting Masterclass", category: "Organic Farming", views: "45K", duration: "28:00", thumbnail: "🌱" },
  { id: 6, title: "Cotton Farming Tips", category: "Crop Advisory", views: "67K", duration: "20:10", thumbnail: "🌿" },
  { id: 7, title: "Natural Fertilizers", category: "Organic Farming", views: "93K", duration: "16:45", thumbnail: "🍃" },
  { id: 8, title: "Monsoon Preparation", category: "Seasonal", views: "41K", duration: "14:30", thumbnail: "🌧️" },
];

const Videos = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Video Resources</h1>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Learn from our expert video tutorials on farming techniques, pest management, and more.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="https://www.youtube.com/@ShivaAgriClinic" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe on YouTube
          </a>
        </Button>
      </div>
    </section>

    {/* Featured Video */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold mb-8">Featured Video</h2>
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="aspect-video bg-gradient-navy flex items-center justify-center relative group cursor-pointer">
              <div className="text-8xl">{featuredVideo.thumbnail}</div>
              <div className="absolute inset-0 bg-background/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-accent-foreground fill-accent-foreground ml-1" />
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold mb-3">{featuredVideo.title}</h3>
              <p className="text-muted-foreground mb-6">{featuredVideo.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Eye className="w-4 h-4" />{featuredVideo.views} views</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featuredVideo.duration}</span>
              </div>
              <Button variant="hero" className="w-fit">
                <Play className="w-4 h-4 mr-2 fill-current" /> Watch Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Video Grid */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold mb-8">All Videos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-card rounded-xl border border-border overflow-hidden group cursor-pointer hover:border-accent transition-colors">
              <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center relative">
                <div className="text-5xl">{video.thumbnail}</div>
                <div className="absolute inset-0 bg-background/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-accent-foreground fill-accent-foreground ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-background/80 text-foreground text-xs px-2 py-1 rounded">{video.duration}</span>
              </div>
              <div className="p-4">
                <span className="text-xs text-accent font-medium">{video.category}</span>
                <h3 className="font-medium mt-1 group-hover:text-accent transition-colors line-clamp-2">{video.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                  <Eye className="w-3 h-3" />{video.views} views
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-4">Want More Video Content?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Subscribe to our YouTube channel for weekly farming tips and tutorials.
        </p>
        <a 
          href="https://www.youtube.com/@ShivaAgriClinic" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#FF0000] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#CC0000] transition-colors"
        >
          <Youtube className="w-5 h-5 mr-2" />
          Subscribe Now
        </a>
      </div>
    </section>
  </Layout>
);

export default Videos;
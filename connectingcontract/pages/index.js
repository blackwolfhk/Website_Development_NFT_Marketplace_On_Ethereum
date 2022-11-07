import React,{useEffect, useContext} from "react";

// INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
} from "../components/componentsindex";

// IMPORTING CONTRACT DATA
import {NFTMarketplaceContext} from "../Context/NFTMarketplaceContext"

const Home = () => {
  const {} = useContext(NFTMarketplaceContext);


  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      <Title
        heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <FollowerTab />
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard />
      <Subscribe />
      <Brand />
      <Video />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
    </div>
  );
};

export default Home;

const About = () => {
  return (
    <div>
      <div className="px-5 pb-10">
        <h1 className="text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl py-10">
          What is Shardeum?
        </h1>
        <div>
          <p>
            Shardeum is the world's first layer 1 blockchain that solves the
            scalability trilemma. Shardeum is an EVM-based, linearly scalable
            smart contract platform that provides low gas fees forever while
            maintaining true decentralization and solid security. The network
            aims to onboard billions of daily users and numerous dApps to Web
            3.0 in the future. Shardeum’s smart contract platforms are deployed
            in developer and user-friendly programming languages - Solidity &
            Vyper.
          </p>
          <br />
          <br />
          <p>
            Linear scalability was recently demonstrated to a live audience
            ahead of the project’s alphanet launch aka ‘Shardeum Liberty’.
            Linear scalability enables Shardeum to increase throughput (TPS) as
            more nodes join the network through ‘dynamic state sharding’, which
            will be explained shortly. Linear scalability ensures that the gas
            fees on the network remain very low forever, regardless of how many
            people use it in the future. Further, it helps the network scale
            horizontally and achieves high decentralization at any given point
            in time.
          </p>
          <br />
          <div style={{ width: "100%" }}>
            <iframe
              id="ytplayer"
              type="text/html"
              class="video"
              src="https://drive.google.com/file/d/1mSSuEuqU1JnKAXU8Omy-WpBEV5Q_Uf08/preview"
              allow="autoplay"
              width="100%"
              height=""
            ></iframe>
          </div>
        </div>
      </div>
      {console.log("about")}
    </div>
  );
};

export default About;

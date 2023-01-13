import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import WhatToExpectComponent from "../components/whatToExpect";
import Seo from "../components/seo";

const WhatToExpect = ({ location }) => {
  const whatToExpectItems = [
    {
      title: "Liturgy",
      description:
        "The holy Christian Church has a language and liturgy all her own. Its roots are found in the Old Testament, its solid foundation in the New Testament, and its distinctive form and shape from 2,000 years of life together in Christ's Church. The liturgy of the Church takes the focus off ourselves and the things of this world and places it on Jesus and His gifts. It leads us into the presence of the risen Christ so that we may hear His Word, partake of His Supper, and receive His forgiveness, His peace, and His blessing. Our bulletin will help you participate in the liturgy by showing you its order, by directing you to page and hymn numbers in the Lutheran Service Book hymnal, and by printing out for you the readings for that particular day. If you don't understand everything in the Divine Service, that's okay—you have your whole life to grow into it. Also, please feel free to ask our pastor if you have any questions or concerns!",
    },
    {
      title: "Singing",
      description:
        "Jesus' death and resurrection for the forgiveness of our sins and for our eternal life and salvation moves us to sing for joy! We sing canticles (Bible passages set to music) and hymns (meditations on the words and promises of God). Our singing proclaims Christ, and praises God for all that He has done for us in Christ.",
    },
    {
      title: "Confession of Sins",
      description:
        "In the Divine Service, God the Father, Son, and Holy Spirit invites us into His presence. We begin, therefore, by confessing that we are thoroughly sinful and unworthy to stand before Him. But we trust in His mercy, and ask for His forgiveness",
    },
    {
      title: "Absolution",
      description:
        "God answers our confession of sins with the joyous declaration that we are forgiven by the blood of Jesus. The Absolution is Jesus' Word of forgiveness, spoken to us by His called and ordained servant. It does what it says and gives what it declares. By the Word of Absolution, you are forgiven!",
    },
    {
      title: "God's Word",
      description:
        "God speaks to us in His Word—the Bible. In the Divine Service we hear what God says to us in three readings—the first from the Old Testament, the second from a New Testament Epistle (letter), and the third from one of the Holy Gospels. Everything in the Divine Service rotates around the Holy Gospel for that particular Sunday, so it is a good idea to read the Holy Gospel before the service begins, and to keep it in mind as you are listening to the other readings and singing the hymns!",
    },
    {
      title: "Confession of Faith",
      description:
        "We respond to God's Word by confessing that what God says is true. The Apostles', Nicene, and Athanasian Creeds are ancient Christian confessions that clearly proclaim who God is and what He has done for us by grace. We are united with the Christians of all times and all places when we confess the Creed.",
    },
    {
      title: "Preaching",
      description:
        "The sermon proclaims and applies God's Word to His people. Its purpose is not to entertain, inspire, or motivate the congregation, but rather to call the people of God to repent of their sins and put their trust in Jesus, to find comfort and help in His promises, and to learn, understand, and live in and from His Word.",
    },
    {
      title: "Law",
      description:
        "The readings and the sermon always contain both Law and Gospel. In the Law, God shows us our sins. The Law doesn't just speak about other people or the world, it speaks to every person, believer or unbeliever. It accuses and condemns us, and thereby drives us to Jesus, our Savior. God wants us to know the truth about ourselves and our sin, so that we will repent of our sin and look to Jesus for forgiveness, life, and salvation.",
    },
    {
      title: "Gospel",
      description:
        "The Law is not God's final word to us. After He has shown us our sin and called us to repentance, God proclaims to us the Gospel—the good news that our sins are forgiven and that we have been reconciled to God by the life, death, and resurrection of Jesus. The Gospel gives us new life in Christ, and both the desire and the ability to live before God in faith, hope, and love.",
    },
    {
      title: "An Offering",
      description:
        "God has given Himself to us in Christ, and Jesus gives Himself to us in His holy Word and blessed Sacrament. We respond to God's good gifts by giving of ourselves back to God. Our money represents our work, and therefore our very lives. We give a generous proportion of what God so generously gives us back to Him in His Church so that His Word and Sacraments can continue to be preached and administered both in our congregation and around the world.",
    },
    {
      title: "Prayer",
      description:
        "Our heavenly Father invites us to ask Him for everything we need for this life and the next. In the Divine Service we thank God for all His good gifts and ask Him to bless and preserve Christ's Church and our congregation, to prosper and protect our country and her leaders, and to comfort and heal those who are sick or mourning. We pray with boldness and confidence, trusting that our heavenly Father hears and answers our prayers for the sake of Christ, our Savior.",
    },
    {
      title: "The Lord's Supper",
      description:
        "Jesus has given to His people the special gift of His very body to eat and His very blood to drink for the forgiveness of our sins and the strengthening of our faith. At the Lord's Table we commune with God and with one another, and are intimately united to Jesus and each other. Because of this, we commune only with those who are truly one with us in our confession of faith.",
    },
    {
      title: "Blessing",
      description:
        "The Divine Service ends with the Lord's blessing that has been spoken over His people for nearly 3,500 years. Like all of God's words, the Benediction does what it says and gives what it declares. We leave the Divine Service with the Lord's blessing and protection, and with His favor and peace.",
    },
  ];
  const { pathname } = location;
  return (
    <Layout>
      <Seo title="What To Expect" />
      <div className="max-w-screen-xl mx-6 lg:mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading
          title="What To Expect"
          subTitle="Trinity Evangelical Lutheran Church is a traditional, liturgical congregation of The Lutheran Church Missouri Synod. We use the hymns and liturgies that are found in the Lutheran Service Book hymnal. We celebrate the Divine Service with Holy Communion every Sunday morning."
        />
        <div className="my-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {whatToExpectItems.map((item) => (
            <WhatToExpectComponent
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WhatToExpect;

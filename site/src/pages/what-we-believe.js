import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import Seo from "../components/seo";

const believeContent = [
  {
    text: "The one and only true God is the Triune God—Father, Son, and Holy Spirit—as revealed by Jesus Christ, the only-begotten Son of the Father, and His prophets, apostles, and evangelists in the Holy Scriptures (Matthew 28:20).",
  },
  {
    text: "Every human being is conceived and born dead to God, is entirely predisposed to sin, is without inherent fear, love, or trust in God and is lacking in the ability or will to turn toward God, is entirely turned against God and is therefore under the sentence of eternal death and damnation (Ephesians 2:1-10; Psalm 51:5).",
  },
  {
    text: "Jesus Christ is true God, eternally begotten of the Father, and at the same time true man, born of the Virgin Mary, and is the only Savior from sin and the only Mediator between God and humanity (John 1:1-3,14; 1 Timothy 2:5; 1 John 5:20; Acts 4:12)",
  },
  {
    text: "who, by His perfect life and sacrificial death on the cross, has won the entire forgiveness of sins and eternal life for every human being, from the beginning to the end of the world (Romans 3:21-26; Galatians 4:4-5; 2 Corinthians 5:21; 1 John 2:2); who rose bodily from the dead on the third day (1 Corinthians 15:3-5); and; who now reigns at the right hand of God as Lord over all (Ephesians 4:10-12)",
  },
  {
    text: "We are justified, or declared “not guilty,” in the sight of God and rescued from sin, death, and damnation not by our works but solely by God’s undeserved kindness, His grace given as a free gift through faith in Jesus Christ, whose perfect life and sacrificial death as “the Lamb of God who takes away the sin of the world” fully atone for our sins (Romans 3:21-28; Ephesians 2:8; John 1:29).",
  },
  {
    text: "The blessings and benefits of Jesus’ saving death and resurrection, namely the forgiveness of sins, eternal life, and salvation, are offered, delivered, and applied to us by means of the Gospel in all its forms (the preached and written Word, Baptism, Absolution, Lord’s Supper), through which the Holy Spirit works faith in Christ. This this end Christ has instituted the Office of the Ministry and sends pastors to preach and administer the holy sacraments in His stead and name (John 6:63; 16:12-15; Luke 24:47; Matthew 28:19; John 20:21-23; 1 Corinthians 11:23-26).",
  },
  {
    text: "Good works, prayer, and holiness of life are the fruit of faith in Christ, not the cause or faith or salvation (John 15:5; Hebrews 11:16).",
  },
  {
    text: "The Holy Church is present wherever believers are gathered about Jesus Christ and His gifts, that is, wherever the Gospel of Jesus Christ is purely preached and taught, and Holy Baptism, Holy Absolution, and Holy Communion are administered according to Christ’s mandate and institution, even though unbelievers or hypocrites may also be numbered among those gathered (Matthew 18:20; Acts 2:42; Matthew 13:47-48).",
  },
  {
    text: "Holy Baptism, which is water applied in the Name of the Triune God according to Jesus’ mandate and promise, works rebirth and renewal, delivers and applies the forgiveness of sins, joins the baptized to Jesus’ death and resurrection, and grants eternal life and salvation to all who believe the promise of salvation attached to Baptism (Matthew 28:19-20; John 3:5; Titus 3:5; Ephesians 5:25-26; Romans 6:4; Colossians 2:11-12; 1 Peter 3:21).",
  },
  {
    text: "Holy Absolution, which is the forgiveness of sins spoken by the Pastor to a penitent sinner in Jesus’ name, actually offers, delivers, and applies the forgiveness of sins to the repentant person with the full authority of the crucified, risen, and reigning Christ (Matthew 16:19; 18:18; John 20:21-23). The word of forgiveness in Holy Absolution is to be heard as Christ our dear Lord speaking to us Himself (Luke 10:16).",
  },
  {
    text: "Holy Communion, or the Lord’s Supper, is the true body and blood of our Lord Jesus Christ given under bread and wine, for Christians to eat and drink, instituted by Jesus Christ Himself, for the forgiveness of their sins (Matthew 26:26-29; 1 Corinthians 11:23-26).",
  },
  {
    text: "The Christian life is one of continual repentance and faith, from which flow good works as the fruit of faith (Matthew 12:33; Luke 24:47).",
  },
  {
    text: "Our Lord Jesus Christ will appear visibly on the Last Day to raise the bodies of all the dead, to condemn those who reject Him in unbelief together with the devil and his demons to hell and eternal punishment, and to give eternal life to all who trust in Him for forgiveness, life, and salvation (Revelation 1:7; Matthew 25:31-46; John 5:28-29).",
  },
  {
    text: "Holy Scripture, of the Holy Bible, is the written Word of God and so is without factual error and is the only source and final authority and judge of all teaching, practice, and life. Holy Scripture preaches the saving death and resurrection of Jesus Christ for the repentance and faith of the sinner (2 Timothy 3:16; 2 Peter 1:22; Luke 24:47).",
  },
  {
    text: "The Word of God is a two-fold word—the Law, which reveals our sin and seeks and kills the sinner, and the Gospel, which announces, offers, delivers, and applies the forgiveness of sins through the death and resurrection of Jesus Christ, creates faith in Him, and gives new life and identity to the believer in Christ (Romans 1:16; 3:21-22; Galatians 2:19-20).",
  },
];

const believeCard = (text) => (
  <div className="p-6 bg-gray-50 border border-gray-200 shadow-lg rounded">
    <p className="text-600">{text}</p>
  </div>
);

const WhatWeBelieve = ({ location }) => {
  const { pathname } = location;
  return (
    <Layout>
      <Seo title="What We Believe" />
      <div className="max-w-screen-xl mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading
          title="What We Believe"
          subTitle="According to Holy Scripture, and in the unity of the one holy Christian and apostolic Church, we believe, teach, and confess:"
        />
        <div className="my-24 grid grid-cols-3 gap-12">
          {believeContent.map((text) => believeCard(text.text))}
        </div>
      </div>
    </Layout>
  );
};

export default WhatWeBelieve;

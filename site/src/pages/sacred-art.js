import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import SacredArtCard from "../components/sacredArtCard";
import Nativity from "../images/sacredArt/nativity.jpg";
import BoyTemple from "../images/sacredArt/boyTemple.jpg";
import Baptism from "../images/sacredArt/baptism.jpg";
import Calling from "../images/sacredArt/calling.jpg";
import Transfiguration from "../images/sacredArt/transfiguration.jpeg";
import LordsSupper from "../images/sacredArt/lordsSupper.jpg";
import Crucifixion from "../images/sacredArt/crucifixion.jpg";
import Resurrection from "../images/sacredArt/resurrection.jpg";
import Ascension from "../images/sacredArt/ascension.jpeg";
import Seo from "../components/seo";

const sacredArtInfo = [
  {
    image: `${Nativity}`,
    title: "The Nativity of Our Lord",
    description:
      "'And while they were there, the time came for her to give birth. And she gave birth to her firstborn son and wrapped Him in swaddling cloths and laid Him in a manger, because there was no place for them in the inn' (Luke 2:6-7). The Nativity of Our Lord is read each year at the Christmas Midnight service. It rejoices in the good news of great joy that is for all people: That unto us is born at Christmas a Savior, who is Christ the Lord. The painting depicts the holy family, Mary and Joseph and the baby Jesus lying in a manger. The ox and the donkey are a nod to Isaiah 1:3, 'The ox knows its owner, and the donkey it's master's crib.' The rod and the staff remind us that this Baby is the Lord who is our shepherd (Psalm 23). The lamb marks Him as the Lamb of God who takes away the sin of the world (John 1:29).",
  },
  {
    image: `${BoyTemple}`,
    title: "The Boy Jesus in the Temple",
    description:
      "'After three days they found Him in the temple, sitting among the teachers, listening to them and asking them questions. And all who heard Him were amazed at His understanding and His answers' (Luke 2:46-47). The account of the boy Jesus in the Temple is read each year on the First Sunday after the Epiphany. It shows us that Jesus is both true God, begotten of the Father from eternity, and also true man, born of the Virgin Mary. He increased in wisdom and in stature and in favor with God and man. He diligently listened to the Word of His Father, learning from it that He must be in His Father's house and about His Father's business of saving sinners. Jesus is portrayed sitting among the teachers, listening to them and asking them questions. Mary and Joseph are seen at the back of the tunnel, search for Him and finding Him in the temple.",
  },
  {
    image: `${Baptism}`,
    title: "The Baptism of Our Lord",
    description:
      "'And when Jesus was baptized, immediately He went up from the water, and behold, the heavens were opened to Him, and He saw the Spirit of God descending like a dove and coming to rest on Him; and behold, a voice from heaven said, 'This is My beloved Son, with whom I am well pleased' (Matthew 3:16-17). The holy Christian Church celebrates the Baptism of our Lord on the Octave of the Epiphany or on the First Sunday after the Epiphany. At His baptism, Jesus took His place with sinners to fulfill all righteousness for them. His baptism was His first definitive step towards the cross. The painting portrays John the Baptist baptizing Jesus in the midst of the Jordan river. The heavens open to Him, the Holy Spirit descends on Him like a dove, and the hand of the Father is seen declaring His good pleasure in Jesus, and in His work for our salvation. The painting hangs in the chancel of the church, near the baptismal font, where our children and new members are baptized into the death and resurrection of Jesus.",
  },
  {
    image: `${Calling}`,
    title: "The Calling of the First Disciples",
    description:
      "'He and all who were with him were astonished at the catch of fish that they had taken, and so also were James and John, sons of Zebedee, who were partners with Simon. And Jesus said to Simon, 'Do not be afraid; from now on you will be catching men.' And when they had brought their boats to land, they left everything and followed Him' (Luke 5:9-11). The Calling of the First Disciples is the Holy Gospel for the Fifth Sunday after Trinity. In it, Jesus reveals how men and women will be 'caught' and brought into the boat of the holy Christian Church. Namely, by letting down the net of the Gospel, that is, by the preaching of His apostolic ministers. As these fisherman caught nothing by their own efforts, but enclosed so large a number of fish that their nets were breaking at Jesus' Word, so the Gospel continues to be preached and to catch men to this day at Jesus' Word. The painting shows Peter and Andrew and their great catch of fish on the shore of the Sea of Galilee, with Jesus calling them into the apostolic ministry.",
  },
  {
    image: `${Transfiguration}`,
    title: "The Transfiguration of Our Lord",
    description:
      "'And He was transfigured before them, and His face shone like the sun, and His clothes became white as light. And behold, there appeared to them Moses and Elijah, talking with Him' (Matthew 17:2-3). The Church rejoices in the Transfiguration of Our Lord on the Last Sunday after the Epiphany each year. At His transfiguration Jesus' divinity shines through His humanity, and Peter and James and John (and us with them) are given a glimpse into heaven. For Jesus stands there in His glory with Moses and Elijah, discussing His coming exodus--His crossing over from death to life--by His cross and resurrection. Again the Father declares, 'This is My beloved Son, with whom I am well pleased; listen to Him.' The painting portrays Jesus radiating light, with Moses and Elijah on either side of Him, and Peter, James, and John looking on. We gather every Sunday in the presence of the risen and glorified Christ, with angels and archangels and with all the company of heaven.",
  },
  {
    image: `${LordsSupper}`,
    title: "The Lord's Supper",
    description:
      "'Our Lord Jesus Christ, on the night when He was betrayed took bread, and when He had given thanks, He broke it, and said, 'This is My body which is for you. Do this in remembrance of Me.' In the same way also He took the cup, after supper, saying, 'This cup is the new testament in My blood. Do this, as often as you drink it, in remembrance of Me' (1 Corinthians 11:23-25). The account of the institution of the Lord's Supper is read each year on Holy Maundy Thursday. This, the first of the paintings we commissioned, hangs on the wall of the chancel, near the altar where we gather every Sunday to receive the Lord's Supper. It is a reminder that it is Jesus Himself, by the hand of our pastor, who gives us His body to eat and His blood to drink for the forgiveness of our sins. At the Lord's Table we have true communion with Him and with one another.",
  },
  {
    image: `${Crucifixion}`,
    title: "The Crucifixion of Our Lord",
    description:
      "'After this, Jesus, knowing that all was now finished, said (to fulfill the Scripture), 'I thirst.' A jar of sour wine stood there, so they put a sponge full of the sour wine on a hyssop branch and held it to His mouth. When Jesus had received the sour wine, He said, 'It is finished,' and He bowed His head and gave up His spirit' (John 19:28-30). The faithful gather on Good Friday each year to hear the reading of the Passion according to St. John. In the darkness, Jesus suffers and dies on the cross for the sins of the whole world. His cross is the ultimate manifestation of His glory. For He was born a man for no other reason than to shed His holy precious blood as an atoning sacrifice for our sins. The painting portrays the moment of His death, and the mixed reactions of those who were gathered around Him. The world still divides over the cross. 'We preach Christ crucified, a stumbling block to Jews and folly to Gentiles, but to those who are called, buth Jews and Greeks, Christ the power of God and the wisdom of God' (1 Corinthians 1:23-24).",
  },
  {
    image: `${Resurrection}`,
    title: "The Resurrection of Our Lord",
    description:
      "'And entering the tomb, they saw a young man sitting on the right side, dressed in a white robe, and they were alarmed. And he said to them, 'Do not be alarmed. You seek Jesus of Nazareth, who was crucified. He has risen; He is not here. See the place where they laid Him' (Mark 16:5-6). The holy Christian Church rejoices in the Resurrection of Our Lord on Easter Sunday morning, and on every Sunday of the Church Year. Jesus' resurrection is the proof positive that He has once-and-for-all defeated sin, death, and the devil for us. As He died and rose again, so shall all those who believe and are baptized into Him die and rise again on the Last Day. Jesus is portrayed in this painting as the living Christ, who rose victoriously from the dead to give life to the world. The lilies and flowers in the foreground remind us that Jesus' resurrection is the beginning of the new creation, where sin and death will be no more.",
  },
  {
    image: `${Ascension}`,
    title: "The Ascension of Our Lord",
    description:
      "'Then He led them out as far as Bethany, and lifting up His hands He blessed them. While He blessed them, He parted from them and was carried up into heaven. And they worshiped Him and returned to Jerusalem with great joy, and were continually in the temple blessing God' (Luke 24:50-53). God's people gather together on the fortieth day of Easter to celebrate the Ascension of Our Lord. Jesus' ascension is not a sad event, but an occasion for great joy. For He goes, not to leave us as orphans, but to prepare a place for us in His Father's house, and to be with us always, even to the end of the age. On Christ's ascension we now build the hope of our ascension. The painting portrays the ascending Christ as He is seen in the statue above our altar. His hands are raised in blessing, for where two or three are gathered in His name, there He is in the midst of them to bless them. We gather every Sunday around the risen and ascended Christ to receive His blessings in the Divine Service.",
  },
];

const isEven = (x) => x % 2 === 0;

const SacredArt = ({ location }) => {
  const { pathname } = location;
  return (
    <Layout>
      <Seo title="Sacred Art" />
      <div className="max-w-screen-xl mx-6 lg:mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading title="Sacred Art" />
        <div className="grid grid-cols-1 gap-12 my-24">
          {sacredArtInfo.map((art, i) => (
            <SacredArtCard
              image={art.image}
              title={art.title}
              description={art.description}
              reverse={isEven(i)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SacredArt;

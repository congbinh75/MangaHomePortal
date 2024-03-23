import Billboard from "./Billboard";
import Carousel from "./Carousel";

const Home = () => {
  const dummyBillboardsTitles = [
    {
      name: "Dugeon Meshi",
      author: "Ryoko Kui",
      description:
        "After his sister is devoured by a dragon and losing all their supplies in a failed dungeon raid, Laios and his party are determined to save his sister before she gets digested. Completely broke and having to resort to eating monsters as food, they meet a dwarf who will introduce them to the world of Dungeon Meshi - delicious cuisine made from ingredients such as the flesh of giant bats, walking mushrooms, or even screaming mandrakes.",
      url: "https://mangadex.org/covers/d90ea6cb-7bc3-4d80-8af0-28557e6c4e17/36cbccf8-b9f2-4ee1-952c-df6b84033b05.jpg",
    },
    {
      name: "Sono Bisque Doll wa Koi wo Suru",
      author: "Shinichi Fukuda",
      description:
        "Wakana Gojou is a fifteen year old high-school boy who was socially traumatized in the past due to his passions. That incident left a mark on him that made him into a social recluse. Until one day he had an encounter with Kitagawa who is a sociable gyaru, who is the complete opposite of him. They soon share their passions with one another which leads to their odd relationship.",
      url: "https://mangadex.org/covers/aa6c76f7-5f5f-46b6-a800-911145f81b9b/5972847b-e0a4-4346-8dd6-8f06839ee1a7.jpg",
    },
    {
      name: "Jujutsu Kaisen",
      author: "Gege Akutami",
      description:
        "Yuuji is a genius at track and field. But he has zero interest running around in circles, he's happy as a clam in the Occult Research Club. Although he's only in the club for kicks, things get serious when a real spirit shows up at school! Life's about to get really strange in Sugisawa Town #3 High School!",
      url: "https://mangadex.org/covers/c52b2ce3-7f95-469c-96b0-479524fb7a1a/42d5cacf-bed0-436b-9864-7204a83f0e0e.png",
    },
  ];

  const dummyStaffPicksTitles = [
    {
      name: "Dugeon Meshi",
      author: "Ryoko Kui",
      description:
        "After his sister is devoured by a dragon and losing all their supplies in a failed dungeon raid, Laios and his party are determined to save his sister before she gets digested. Completely broke and having to resort to eating monsters as food, they meet a dwarf who will introduce them to the world of Dungeon Meshi - delicious cuisine made from ingredients such as the flesh of giant bats, walking mushrooms, or even screaming mandrakes.",
      url: "https://mangadex.org/covers/d90ea6cb-7bc3-4d80-8af0-28557e6c4e17/d885a28e-a5d3-4dc3-85e9-ca600f227b04.jpg",
    },
    {
      name: "Sono Bisque Doll wa Koi wo Suru",
      author: "Shinichi Fukuda",
      description:
        "Wakana Gojou is a fifteen year old high-school boy who was socially traumatized in the past due to his passions. That incident left a mark on him that made him into a social recluse. Until one day he had an encounter with Kitagawa who is a sociable gyaru, who is the complete opposite of him. They soon share their passions with one another which leads to their odd relationship.",
      url: "https://mangadex.org/covers/aa6c76f7-5f5f-46b6-a800-911145f81b9b/6b10b571-1263-46d1-8404-32cf0707f46b.jpg",
    },
    {
      name: "Jujutsu Kaisen",
      author: "Gege Akutami",
      description:
        "Yuuji is a genius at track and field. But he has zero interest running around in circles, he's happy as a clam in the Occult Research Club. Although he's only in the club for kicks, things get serious when a real spirit shows up at school! Life's about to get really strange in Sugisawa Town #3 High School!",
      url: "https://mangadex.org/covers/c52b2ce3-7f95-469c-96b0-479524fb7a1a/40dfaef9-0360-4086-b0d2-d655579bf1d0.jpg",
    },
    {
      name: "ZINGNIZE",
      author: "Warai Naku",
      description:
        'The story of the Three Jinnai from Edo" (Kosaka, Tobisawa, Shoji). Eight year of the Keicho era, 3 years after the Battle of Sekigahara (1603 AD) Okubo Nagayasu calls on Kosaka Jinnai, who is known as the best thief in Japan, to eliminate the bandit gang led by Fuma Kotaro. A fierce battle between the Jinnais and the Fuma clan opens its curtain !!',
      url: "https://mangadex.org/covers/b34e35f3-5735-48f3-b044-d4a43d69c5da/bdf84515-6136-42f0-a0fb-50141a61e106.jpg",
    },
    {
      name: "Q.E.D. iff",
      author: "Katou Motohiro",
      description:
        "The continuation of the Q.E.D. series under Shounen Magazine R.",
      url: "https://mangadex.org/covers/892fd4fd-a7b2-47e0-9119-e1941de8f803/c4ee4933-9f9b-43e1-823e-3202b18a9a9d.png",
    },
    {
      name: "Grand Blue",
      author: "Inoue Kenji, Yoshioka Kimitake",
      description:
        "A new life begins for Kitahara Iori as he begins his college career near the ocean in Izu city, full of excitement for his new life. He will be moving into his uncle's diving store 'Grand Blue'. There he finds the ocean, beautiful women, and men that love diving and alcohol. Will Iori be able to live his dream college life?",
      url: "https://mangadex.org/covers/fffbfac3-b7ad-41ee-9581-b4d90ecec941/769189eb-de4b-42ef-97ab-e526bf3e1389.jpg",
    },
    {
      name: "Golden Kamuy",
      author: "Noda Satoru",
      description:
        "In the early twentieth century, Russo-Japanese War veteran Saichi “Immortal” Sugimoto scratches out a meager existence during the postwar gold rush in the wilderness of Hokkaido. When he stumbles across a map to a fortune in hidden Ainu gold, he sets off on a treacherous quest to find it. But Sugimoto is not the only interested party, and everyone who knows about the gold will kill to possess it! Faced with the harsh conditions of the northern wilderness, ruthless criminals and rogue Japanese soldiers, Sugimoto will need all his skills and luck—and the help of an Ainu girl named Asirpa - to survive.",
      url: "https://mangadex.org/covers/8847f905-550d-4fe6-bcda-ac2b896789c7/e96cfe6d-7876-4558-b4bc-0930deb5060a.jpg",
    },
    {
      name: "Amano Megumi wa Suki Darake!",
      author: "Nekoguchi",
      description:
        'Shindo Manabu is a student at a very prestigious high school whose goal is to get into Tokyo University. He studies constantly and tries to never lose sight of that goal. That is until his childhood friend, Amano Megumi, who goes to the same school starts to distract him. He originally only remembered her as the tomboy she was as a kid, until he notices how "developed" she has become. As these two get closer to each other, hilarity often ensues and subsequently, Manabu becomes more and more distracted from his goal of getting into Tokyo U.',
      url: "https://mangadex.org/covers/133ec785-0677-4e22-8186-e15ed0621c36/617b535f-7bae-4a08-8aaa-c148bffbd234.jpg",
    },
    {
      name: "Love and Collage",
      author: "Inoue Kazurou",
      description:
        "Maeda Hachibei is unlike most guys, who lust after gorgeous girls. This pervert lusts after their discrete parts, instead. When he moves to Tokyo to attend school, he finds himself living in a dormitory with five girls, each of which possesses one of the ideal physical features he desires: gorgeous blue eyes, bullet-train breasts, a deep dulcet voice, straight “anime-esque” legs, or a waistline shaped like fine Japanese pottery. How can he manage to keep his wits when surrounded by these women? If you think this sounds like a Love Hina clone, you wouldn’t be entirely incorrect… but Hachibei isn’t Keitaro.",
      url: "https://mangadex.org/covers/00719812-4db7-4a62-bd47-f91c7b2fb86c/ac02121b-e24a-4fd9-b864-6dc9e5690c12.jpg",
    },
    {
      name: "Jinrui o Metsubou Sasete wa Ikemasen",
      author: "Takahata Kyuu, Kaba Yuuji",
      description:
        "On his way home from work the 26 year old salaryman, Kawakita Osamu, encounters an alien named Lilin. She and her species plan on invading the earth but she ended up getting stranded on this planet. Can Osamu raise her to become a kind-hearted kid before her species eradicates humanity in five years?",
      url: "https://mangadex.org/covers/f8c3f18c-d75b-4750-86f3-bbbc75fd2ea2/d167ef0d-9884-4f37-a0e0-11a00e5b50ca.jpg",
    },
    {
      name: "My Hero Academia",
      author: "Horikoshi Kouhei",
      description:
        "One day, a four-year-old boy came to a sudden realization: the world is not fair. Eighty percent of the world's population wield special abilities, known as 'quirks' which have given many the power to make their childhood dreams of becoming a superhero a reality. Unfortunately, Izuku Midoriya was one of the few born without a quirk, suffering from discrimination because of it. Yet, he refuses to give up on his dream of becoming a hero; determined to do the impossible, Izuku sets his sights on the elite hero training academy, UA High. However, everything changes after a chance meeting with the number one hero and Izuku's idol, All Might. Discovering that his dream is not a dead end, the powerless boy undergoes special training, working harder than ever before. Eventually, this leads to him inheriting All Might's power, and with his newfound abilities, gets into his school of choice, beginning his grueling journey to become the successor of the best hero on the planet.",
      url: "https://mangadex.org/covers/4f3bcae4-2d96-4c9d-932c-90181d9c873e/ce8e952d-34b1-4810-a690-13a74597a33f.jpg",
    },
    {
      name: "Trace: Kasouken Houi Kenkyuuin no Tsuisou",
      author: "Koga Kei",
      description:
        "A crime suspense story set in a forensic laboratory where specialists work to uncover clues from seemingly insignificant bits of trace evidence. The story begins when Sawaguchi Nonna, a rookie forensic researcher, meets Mano Reiji, the man who solved her parents' murder case.",
      url: "https://mangadex.org/covers/62381426-8f6a-497e-869c-026d1aa6fc25/c870c193-2a28-4f53-9401-d31f156cf6ac.jpg",
    },
    {
      name: "Detective Conan",
      author: "Gosho Aoyama",
      description:
        "Shinichi Kudo is a high school detective who sometimes works with the police to solve cases. During an investigation, he is attacked by members of a crime syndicate known as the Black Organization. They force him to ingest an experimental poison, but instead of killing him, the poison transforms him into a child. Adopting the pseudonym Conan Edogawa and keeping his true identity a secret, Kudo lives with his childhood friend Ran and her father Kogoro, who is a private detective.",
      url: "https://mangadex.org/covers/7f30dfc3-0b80-4dcc-a3b9-0cd746fac005/a12426b3-c93e-4441-b53e-09671758d014.jpg",
    },
    {
      name: "Yotsuba&!",
      author: "Azuma Kiyohiko",
      description:
        "Yotsuba is a strange little girl with a big personality! Even in the most trivial, unremarkable encounters, Yotsuba's curiosity and enthusiasm quickly turns the everyday into the extraordinary!",
      url: "https://mangadex.org/covers/58be6aa6-06cb-4ca5-bd20-f1392ce451fb/5951267f-f863-4e1b-b1fc-a5cfb56faaf8.jpg",
    },
    {
      name: "Otaku ni Koi wa Muzukashii",
      author: "Fujita",
      description:
        "Narumi Momose has had it rough: every boyfriend she’s had dumped her once they found out she was an otaku, so she’s gone to great lengths to hide it. When a chance meeting at her new job with childhood friend, fellow otaku, and now coworker Hirotaka Nifuji almost gets her secret outed at work, she comes up with a plan to make sure he never speaks up. But he comes up with a counter-proposal: why doesn’t she just date him instead? In love, there are no save points.",
      url: "https://mangadex.org/covers/65263bf9-4f87-4513-b72f-ad6436b3911c/b7f78e11-c910-48bb-a842-798e04f0f92f.jpg",
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-10">
        <Billboard titles={dummyBillboardsTitles} />
      </div>
      <div className="mb-10">
        <p className="text-4xl bold mb-5">Staff Picks</p>
        <Carousel titles={dummyStaffPicksTitles} />
      </div>
    </div>
  );
};

export default Home;

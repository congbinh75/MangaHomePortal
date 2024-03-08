import Billboard from "../billboard/Billboard";

interface Props {
  isSidebarVisible: boolean;
  setIsSidebarVisible: Function;
}

const Home = (props: Props) => {
  const dummyTitles = [
    {
      name: "Dugeon Meshi",
      author: "Ryoko Kui",
      description: "After his sister is devoured by a dragon and losing all their supplies in a failed dungeon raid, Laios and his party are determined to save his sister before she gets digested. Completely broke and having to resort to eating monsters as food, they meet a dwarf who will introduce them to the world of Dungeon Meshi - delicious cuisine made from ingredients such as the flesh of giant bats, walking mushrooms, or even screaming mandrakes.",
      url: "https://mangadex.org/covers/d90ea6cb-7bc3-4d80-8af0-28557e6c4e17/36cbccf8-b9f2-4ee1-952c-df6b84033b05.jpg",
    },
    {
      name: "Sono Bisque Doll wa Koi wo Suru",
      author: "Shinichi Fukuda",
      description: "Wakana Gojou is a fifteen year old high-school boy who was socially traumatized in the past due to his passions. That incident left a mark on him that made him into a social recluse. Until one day he had an encounter with Kitagawa who is a sociable gyaru, who is the complete opposite of him. They soon share their passions with one another which leads to their odd relationship.",
      url: "https://mangadex.org/covers/aa6c76f7-5f5f-46b6-a800-911145f81b9b/5972847b-e0a4-4346-8dd6-8f06839ee1a7.jpg",
    },
    {
      name: "Jujutsu Kaisen",
      author: "Gege Akutami",
      description: "Yuuji is a genius at track and field. But he has zero interest running around in circles, he's happy as a clam in the Occult Research Club. Although he's only in the club for kicks, things get serious when a real spirit shows up at school! Life's about to get really strange in Sugisawa Town #3 High School!",
      url: "https://mangadex.org/covers/c52b2ce3-7f95-469c-96b0-479524fb7a1a/42d5cacf-bed0-436b-9864-7204a83f0e0e.png",
    },
  ];

  return (
    <div
      className={`w-full p-5 flex flex-col ease-in-out duration-300 ${
        props.isSidebarVisible ? "translate-x-0 " : "-translate-x-28"
      }`}
    >
      <div className="flex w-full mb-5">
        <button onClick={() => props.setIsSidebarVisible(true)}>
          <i className="flex fa-solid fa-bars" />
        </button>
      </div>
      <div>
          <Billboard titles={dummyTitles} />
      </div>
    </div>
  );
};

export default Home;

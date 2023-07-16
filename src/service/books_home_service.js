const connection = require("../connectDB");
const { formatCover } = require("../utils/formatCover");
const { SERVICE_BASE_URL } = require("../config");

const randomArray = (length, arrLength, arr) => {
  const handleArr = [];
  const randomArr = [];
  while (randomArr.length < length) {
    const num = Math.floor(Math.random() * arrLength);
    if (!randomArr.includes(num)) {
      randomArr.push(num);
      arr[num]["cover"] = formatCover(arr[num]["cover"]);
      handleArr.push(arr[num]);
    }
  }
  return handleArr;
};

const floatCategoryList = (arr) => {
  const categoryClass = [
    "SocialSciences",
    "Economics",
    "Education",
    "ComputerScience",
  ];
  const handleArr = [
    {
      categoryClass: "SocialSciences",
      list: [],
    },
    {
      categoryClass: "Economics",
      list: [],
    },
    {
      categoryClass: "Education",
      list: [],
    },
    {
      categoryClass: "ComputerScience",
      list: [],
    },
  ];
  arr.forEach((item) => {
    const categoryText = item.categoryText;
    let fist_normal_category = "";
    if (
      fist_normal_category === categoryText ||
      categoryClass.includes(categoryText)
    ) {
      const index = categoryClass.findIndex((item) => item === categoryText);
      item["cover"] = formatCover(item["cover"]);
      handleArr[index].list.push(item);
      fist_normal_category = categoryText;
    }
  });
  return handleArr;
};

async function getHomeBooksService() {
  const statement_common = `SELECT * FROM book;`;
  // const statement_category = `SELECT * FROM book;`;
  const [result_common] = await connection.execute(statement_common, []);
  // const [result_category] = await connection.execute(statement_category, []);
  const length = result_common.length;
  const guessYouLike = randomArray(12, length, result_common);
  const banner =
    "https://danyun.oss-cn-chengdu.aliyuncs.com/24972637_0_final.png";
  const recommend = randomArray(4, length, result_common);
  const featured = randomArray(6, length, result_common);
  const categoryList = floatCategoryList(result_common);
  const categories = [
    {
      category: 1,
      num: 56,
      img1: `http://${SERVICE_BASE_URL}/cover/cs/A978-3-319-62533-1_CoverFigure.jpg`,
      img2: `http://${SERVICE_BASE_URL}/cover/cs/A978-3-319-89366-2_CoverFigure.jpg`,
    },
    {
      category: 2,
      num: 51,
      img1: `http://${SERVICE_BASE_URL}/cover/ss/A978-3-319-61291-1_CoverFigure.jpg`,
      img2: `http://${SERVICE_BASE_URL}/cover/ss/A978-3-319-69299-9_CoverFigure.jpg`,
    },
    {
      category: 3,
      num: 32,
      img1: `http://${SERVICE_BASE_URL}/cover/eco/A978-3-319-69772-7_CoverFigure.jpg`,
      img2: `http://${SERVICE_BASE_URL}/cover/eco/A978-3-319-76222-7_CoverFigure.jpg`,
    },
    {
      category: 4,
      num: 60,
      img1: `http://${SERVICE_BASE_URL}/cover/edu/A978-981-13-0194-0_CoverFigure.jpg`,
      img2: `http://${SERVICE_BASE_URL}/cover/edu/978-3-319-72170-5_CoverFigure.jpg`,
    },
    {
      category: 5,
      num: 23,
      img1: `http://${SERVICE_BASE_URL}/cover/eng/A978-3-319-39889-1_CoverFigure.jpg`,
      img2: `http://${SERVICE_BASE_URL}/cover/eng/A978-3-319-00026-8_CoverFigure.jpg`,
    },
    {
      category: 6,
      num: 42,
      img1: `http://${SERVICE_BASE_URL}/cover/env/A978-3-319-12039-3_CoverFigure.jpg`,
      img2: `http://${SERVICE_BASE_URL}/cover/env/A978-4-431-54340-4_CoverFigure.jpg`,
    },
    {
      category: 7,
      num: 7,
      img1: `http://${SERVICE_BASE_URL}/cover/geo/A978-3-319-56091-5_CoverFigure.jpg`,
      img2: `http://${SERVICE_BASE_URL}/cover/geo/978-3-319-75593-9_CoverFigure.jpg`,
    },
    {
      category: 8,
      num: 18,
      img1: `http://${SERVICE_BASE_URL}/cover/his/978-3-319-65244-3_CoverFigure.jpg`,
      img2: `http://${SERVICE_BASE_URL}/cover/his/978-3-319-92964-4_CoverFigure.jpg`,
    },
    {
      category: 9,
      num: 13,
      img1: `http://${SERVICE_BASE_URL}/cover/law/2015_Book_ProtectingTheRightsOfPeopleWit.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/law/2016_Book_ReconsideringConstitutionalFor.jpeg`,
    },
    {
      category: 10,
      num: 24,
      img1: `http://${SERVICE_BASE_URL}/cover/ls/A978-3-319-27288-7_CoverFigure.jpg`,
      img2: `http://${SERVICE_BASE_URL}/cover/ls/A978-1-4939-3743-1_CoverFigure.jpg`,
    },
    {
      category: 11,
      num: 6,
      img1: `http://${SERVICE_BASE_URL}/cover/lit/2015_humanities.jpg`,
      img2: `http://${SERVICE_BASE_URL}/cover/lit/A978-3-319-44388-1_CoverFigure_HTML.jpg`,
    },
    {
      category: 12,
      num: 14,
      img1: `http://${SERVICE_BASE_URL}/cover/bio/2016_Book_ATimeForMetabolismAndHormones.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/bio/2017_Book_SnowSportsTraumaAndSafety.jpeg`,
    },
    {
      category: 13,
      num: 16,
      img1: `http://${SERVICE_BASE_URL}/cover/bm/2017_Book_FashionFigures.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/bm/2018_Book_HeterogeneityHighPerformanceCo.jpeg`,
    },
    {
      category: 14,
      num: 16,
      img1: `http://${SERVICE_BASE_URL}/cover/es/2017_Book_AdvancingCultureOfLivingWithLa.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/es/2017_Book_ChinaSGasDevelopmentStrategies.jpeg`,
    },
    {
      category: 15,
      num: 2,
      img1: `http://${SERVICE_BASE_URL}/cover/ms/2018_Book_ProceedingsOfTheScientific-Pra.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/ms/2018_Book_ProceedingsOfTheScientific-Pra.jpeg`,
    },
    {
      category: 16,
      num: 9,
      img1: `http://${SERVICE_BASE_URL}/cover/mat/2016_Book_AdvancesInDiscreteDifferential.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/mat/2016_Book_ComputingCharacterizationsOfDr.jpeg`,
    },
    {
      category: 17,
      num: 20,
      img1: `http://${SERVICE_BASE_URL}/cover/map/2013_Book_TheSouthTexasHealthStatusRevie.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/map/2016_Book_SecondaryAnalysisOfElectronicH.jpeg`,
    },
    {
      category: 18,
      num: 16,
      img1: `http://${SERVICE_BASE_URL}/cover/phi/2015_Book_TheOnlifeManifesto.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/phi/2017_Book_Anti-VivisectionAndTheProfessi.jpeg`,
    },
    {
      category: 19,
      num: 10,
      img1: `http://${SERVICE_BASE_URL}/cover/phy/2016_Book_OpticsInOurTime.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/phy/2017_Book_InterferometryAndSynthesisInRa.jpeg`,
    },
    {
      category: 20,
      num: 26,
      img1: `http://${SERVICE_BASE_URL}/cover/psa/2016_Book_EnvironmentalGovernanceInLatin.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/psa/2017_Book_RisingPowersAndPeacebuilding.jpeg`,
    },
    {
      category: 21,
      num: 3,
      img1: `http://${SERVICE_BASE_URL}/cover/psy/2015_Book_PromotingSocialDialogueInEurop.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/psy/2015_Book_RethinkingInterdisciplinarityA.jpeg`,
    },
    {
      category: 22,
      num: 1,
      img1: `http://${SERVICE_BASE_URL}/cover/sta/2013_Book_ShipAndOffshoreStructureDesign.jpeg`,
      img2: `http://${SERVICE_BASE_URL}/cover/sta/2013_Book_ShipAndOffshoreStructureDesign.jpeg`,
    },
  ];
  const random = randomArray(20, length, result_common);

  return {
    guessYouLike,
    banner,
    recommend,
    featured,
    categoryList,
    categories,
    random,
  };
}

module.exports = {
  getHomeBooksService,
};

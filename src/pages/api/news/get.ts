import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ articles: Article[]; message?: string }>
) => {
  try {
    const response = await fetch(
      `https://api.newscatcherapi.com/v2/latest_headlines?lang=en&page=1`,
      {
        headers: {
          "x-api-key": process.env.NEWS_CATCHER_API!,
        },
      }
    );
    const news = await response.json();
    return res.status(200).json({
      articles: news.articles,
    });
  } catch (error: any) {
    return res.status(500).json({
      articles: [],
      message: error.message,
    });
  }
};

export default handler;

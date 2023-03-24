import { NextApiRequest, NextApiResponse } from "next";
import { openai } from "@/lib/openai";
import { z } from "zod";

const reqSchema = z.object({
  text: z.string().nonempty(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const { text } = reqSchema.parse(body);
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `classify wether the following text is optimistic or pessimistic:${text} `,
    });

    return res.status(200).json({
      success: true,
      data: response.data.choices[0].text,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default handler;

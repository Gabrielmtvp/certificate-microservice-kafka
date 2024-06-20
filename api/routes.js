import { Router } from "express";

const router = Router();

router.post("/certification", async (req, res) => {
  await req.producer.send({
    topic: "issue-certificate",
    messages: [{ value: "hello!!!" }],
  });

  return res.status(200).send("ok");
});

export default router;

import { app } from "@/app";

const PORT = 3333

app.get("/", (req, res) => {
  res.send("Olá mundo")
})

app.listen(PORT, () => (
  console.log(`server is running on port ${PORT}`))
) 
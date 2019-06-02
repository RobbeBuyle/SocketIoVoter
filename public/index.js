{
  let socket = io();

  const init = () => {
    // console.log("hallo?!");

    handleVoteForm();
  };

  const handleVoteForm = () => {
    const form = document.querySelector(`.voteForm`);
    const votes = document.querySelector(`.votes`);

    socket.on("send vote", data => {
      const li = document.createElement("li");
      li.textContent = data.msg;
      votes.appendChild(li);
    });

    form.addEventListener("submit", handleSubmitForm);
  };

  const handleSubmitForm = e => {
    console.log(`ik ben geactiveerd c:`);
    const vote = document.querySelector(`.options`);

    socket.emit("send vote", vote.value);
    console.log(vote.value);

    e.preventDefault();
  };

  init();
}

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const getHoots = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}/hoots`, {
            heasers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,

            },

        });
        const hoots = await res.json();
        console.log(hoots);
        return hoots;
      } catch (err) {
        console.log(err, " omething wrong");

    }
};
const showHoot = async (hootId) => {
    try {
        const res = await fetch(`${BACKEND_URL}/hoots/${hootId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
        });
        const hoot = await res.json();
        console.log(hoot);
        return hoot;

    } catch (err) {
        console.log(err, 'something wrong');

    }
};
const create = async (formData) => {
    try {
      const res = await fetch(`${BACKEND_URL}/hoots/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { hoot } = await res.json();
      return hoot;
    } catch (err) {
      console.log(err);
    }
  };
  
  const createComment = async (formData, postId) => {
    try {
      const res = await fetch(`${BACKEND_URL}/hoots/${postId}/comments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { newComment } = await res.json();
      return newComment;
    } catch (error) {
      console.log(error);
    }
  };

export { getHoots, showHoot, create, createComment };
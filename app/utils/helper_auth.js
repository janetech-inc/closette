import cookies from 'next-cookies'
import axios from "axios/index";
import Router from "next/router";

export const handleCatalogCall = async (ctx, url) => {
  const { token } = cookies(ctx);

  try {
    var axiosInstance = axios.create({
      validateStatus: (status) => {
          return status >= 200 && status <= 503;
      },
    });

    const response = await axiosInstance.get(url, {
      headers: {'Authorization': `Bearer ${token}`
    }});
    const status = response.status;
    if (status === 200) {
      return response;
    } else if (status === 401 || status === 403) {
        // on forbidden or wrong token status we want to logout the user (delete session and cookies)
        // and redirect to new login page
        if (ctx.res) {
          ctx.res.writeHead(302, {
            Location: '/clear_session'
          })
          ctx.res.end()
        } else {
          Router.push('/clear_session')
        }
    }
  } catch (err) {
    console.log(err)
  }
}
import React, { PureComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "../routes/shop";
import ShopDetail from "../routes/shop/shopDetail";
import User from "../routes/users";
import NotFound from "../routes/Exception/404";
import styles from "./BasicLayout.less";
import SiderMenu from "../components/SiderMenu";
import "antd/dist/antd.css";

export default class BasicLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.basicLayoutContainer}>
        <header className={styles.header}>
          <h1>set your likely header.</h1>
        </header>
        <section className={styles.contentContainer}>
          <aside className={styles.left}>
            <div className={styles.menuLogo}>hello menu</div>
            <SiderMenu />
          </aside>
          <article className={styles.right}>
            <Switch>
              <Route exact path="/shop/list" component={Shop}></Route>
              <Route exact path="/shop/detail" component={ShopDetail} />
              <Route exact path="/user" component={User} />
              <Redirect exact from="/" to="/shop" />
              <Route render={NotFound} />
            </Switch>
          </article>
        </section>
        <footer className={styles.footer}>develop by @wangpengpeng.</footer>
        {children}
      </div>
    );
  }
}

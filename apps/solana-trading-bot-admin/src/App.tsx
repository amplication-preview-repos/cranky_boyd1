import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TradesList } from "./trades/TradesList";
import { TradesCreate } from "./trades/TradesCreate";
import { TradesEdit } from "./trades/TradesEdit";
import { TradesShow } from "./trades/TradesShow";
import { LiquidityPairsList } from "./liquidityPairs/LiquidityPairsList";
import { LiquidityPairsCreate } from "./liquidityPairs/LiquidityPairsCreate";
import { LiquidityPairsEdit } from "./liquidityPairs/LiquidityPairsEdit";
import { LiquidityPairsShow } from "./liquidityPairs/LiquidityPairsShow";
import { UsersList } from "./users/UsersList";
import { UsersCreate } from "./users/UsersCreate";
import { UsersEdit } from "./users/UsersEdit";
import { UsersShow } from "./users/UsersShow";
import { SettingsList } from "./settings/SettingsList";
import { SettingsCreate } from "./settings/SettingsCreate";
import { SettingsEdit } from "./settings/SettingsEdit";
import { SettingsShow } from "./settings/SettingsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SolanaTradingBot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Trades"
          list={TradesList}
          edit={TradesEdit}
          create={TradesCreate}
          show={TradesShow}
        />
        <Resource
          name="LiquidityPairs"
          list={LiquidityPairsList}
          edit={LiquidityPairsEdit}
          create={LiquidityPairsCreate}
          show={LiquidityPairsShow}
        />
        <Resource
          name="Users"
          list={UsersList}
          edit={UsersEdit}
          create={UsersCreate}
          show={UsersShow}
        />
        <Resource
          name="Settings"
          list={SettingsList}
          edit={SettingsEdit}
          create={SettingsCreate}
          show={SettingsShow}
        />
      </Admin>
    </div>
  );
};

export default App;

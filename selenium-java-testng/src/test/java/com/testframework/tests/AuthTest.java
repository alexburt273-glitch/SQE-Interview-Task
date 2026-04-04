package com.testframework.tests;

import org.testng.Assert;
import org.testng.annotations.Test;
import com.testframework.base.BaseTest;
import com.testframework.pages.LoginPage;

public class AuthTest extends BaseTest {

    @Test
    public void validLoginTest() {

        LoginPage loginPage = new LoginPage(driver);
        loginPage.login("standard_user", "secret_sauce");

        Assert.assertTrue(driver.getCurrentUrl().contains("inventory"));
    }
}
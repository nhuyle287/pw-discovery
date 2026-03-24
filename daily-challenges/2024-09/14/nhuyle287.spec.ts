
import {test, expect} from '@playwright/test';

//javascript


function calculateBMI(height: number, weight: number): { bmi: number; category: string } {
    const bmiRaw = weight / (height * height);
    const bmi = Math.round(bmiRaw * 10) / 10; // làm tròn 1 chữ số

    let category = "";

    if (bmi < 18.5) {
        category = "Gầy";
    } else if (bmi < 24.9) {
        category = "Bình thường";
    } else if (bmi < 29.9) {
        category = "Thừa cân";
    } else {
        category = "Béo phì";
    }

    return { bmi, category };
}

const result = calculateBMI(1.75, 68);

console.log(`Kết quả BMI: ${result.bmi}`);
console.log(`Phân loại: "${result.category}"`);

//playwright

test('2026-03 day 14',async({page})=>{
    await page.goto("https://material.playwrightvn.com/");
   // await page.getByRole("link", { name: /Register Page/ }).click();
   await page.locator('a[href="01-xpath-register-page.html"]').click();
    const username ="nhuy287";
    const email="nhuy287@gmail.com";
    await page.getByLabel("Username").fill(username);
    await page.getByLabel("Email").fill(email);
    await page.getByRole("button",{name:"Register"}).click();

    await expect(page.locator("//tbody//tr")).toHaveCount(1);
    await expect(page.locator("//tbody//td").nth(1)).toHaveText(username);//nth đếm từ 0
    await expect(page.locator("//tbody//td").nth(2)).toHaveText(email);



})
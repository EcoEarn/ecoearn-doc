---
slug: /
sidebar_position: 1
title: EcoEarn Introduction
description: EcoEarn Introduction
---

# EcoEarn Introduction

EcoEarn is the first decentralised staking platform in the L1 Network aelf, integrating points staking, token staking, and LP staking into one seamless system, offering users a secure and efficient mining experience. This documentation explains how to use EcoEarn's product and what you need to know before depositing and staking.

![](/img/1.1.1.png)

## 1.1 **Multiple Staking Types**

EcoEarn supports various staking pool types, including **Points Staking**, **Simple Staking**, and **Liquidity Staking (LP)**.

Currently, all types of staking do not support early unstaking before the expiration date. The early unstaking feature will be added in future versions. Please ensure you have your ideal setting configured before confirming the staking action.

## 1.2 **Rewards Claiming Rules**

As we enjoy high annual percentage rates (APR), and secure staking experiences, here are the Rewards Claiming Rules:

- When staking rewards are claimed, there will be a **90-day release period**. The rewards can be claimed on **days 1, 7, 15, 30, 60, and 90**. For instance, on the first day, you can claim 1/90 of the total rewards, while the remaining 89/90 are frozen. By the 90th day, the full amount can be claimed.
- Rewards claimed within a 5-day period will be consolidated and released together.
- A 10% service fee will be applied to mining pool earnings obtained through staking; this fee will be covered by the staking projects we partner with, so users won't have to pay anything.

## 1.3 **Stake your unreleased rewards**

Even though there is a frozen period for the rewards, you can **stake all of your unreleased rewards in advance**, even if they haven't been claimed yet. This allows you to earn a higher APR compared to waiting for the frozen period to end.

## 1.4 **Simple Staking & Farms APR Calculation Rules**

***APR = (Annual Rewards in USD) / (Total Staked Assets in the Mining Pool in USD) * 100***

The APR is constantly changing, influenced by the total amount staked in the pool, the price of the staked tokens, and the price of the reward tokens.

Additionally, the APR is affected by the staking duration; the longer the staking period, the greater the multiplier  K , with a maximum of 3 times. The adjusted APR for users is calculated by multiplying the base APR by this multiplier.

***Multiplier  K = 1 + N  (Staking Duration) *  L  (Fixed Coefficient of 1/180)***

For example, a user participates in a 360-day mining pool that offers rewards worth $1,800,000 and stakes for 360 days. In total, users have collectively staked tokens valued at $3,000,000 in the mining pool.

|   | **Calculation**  | **Amount**  |
|------|------|------|
| Total rewards to distribute (USD value)  | - | 1,800,000 USD |
| Rewards distribution period  | - | 360 days |
| Daily Rewards distribution  | 1,800,000 / 360 =  | 5,000 USD daily |
| **Annualised rewards (USD value)**  | 5,000 * 365 =  | **1,825,000 USD** |
| **Value of Token staked by users in Mining pool (USD value)**  | - | **3,000,000 USD** |
| **Multiplier**  | 1 + 360*1/180= | **3** |
| **APR**  | (1,825,000 / 3,000,000) * 3 * 100 =  | **182.5% APR** |